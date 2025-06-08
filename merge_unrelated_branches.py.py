import subprocess
import sys
import time
from threading import Thread
import os

REPO_URL = "https://github.com/karkra911/pokedex-website.git"
REMOTE_NAME = "origin"

def run(command):
    """Run shell command and return result."""
    return subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

def show_spinner(stop_flag):
    """Display a spinner during long operation."""
    spinner = "|/-\\"
    idx = 0
    while not stop_flag[0]:
        sys.stdout.write(f"\rMerging... {spinner[idx % len(spinner)]}")
        sys.stdout.flush()
        idx += 1
        time.sleep(0.1)
    sys.stdout.write("\rMerge process complete.        \n")

def main():
    # Input branches
    base_branch = "main"
    merging_branch = "gh-pages"

    # Clone repo if folder doesn't exist
    repo_folder = "pokedex-website"
    if not os.path.exists(repo_folder):
        print("📦 Cloning repository...")
        result = run(["git", "clone", REPO_URL])
        if result.returncode != 0:
            print("❌ Clone failed:\n", result.stderr)
            return

    os.chdir(repo_folder)

    # Fetch all branches
    run(["git", "fetch", "--all"])

    # Checkout base branch
    print(f"🔁 Checking out '{base_branch}'...")
    result = run(["git", "checkout", base_branch])
    if result.returncode != 0:
        print("❌ Failed to checkout base branch:\n", result.stderr)
        return

    # Make sure merging branch exists
    run(["git", "fetch", REMOTE_NAME, merging_branch])

    # Merge process
    print(f"🔀 Merging '{merging_branch}' into '{base_branch}'...\n")

    start_time = time.time()
    stop_flag = [False]
    spinner_thread = Thread(target=show_spinner, args=(stop_flag,))
    spinner_thread.start()

    result = run(["git", "merge", f"{REMOTE_NAME}/{merging_branch}", "--allow-unrelated-histories"])

    stop_flag[0] = True
    spinner_thread.join()
    elapsed_time = time.time() - start_time
    elapsed_str = time.strftime("%H:%M:%S", time.gmtime(elapsed_time))

    print(f"\n🕒 Merge completed in: {elapsed_str}")

    if result.returncode == 0:
        print("✅ Merge successful.")
    else:
        print("❌ Merge failed.\n")
        print("---- stderr ----")
        print(result.stderr)

if __name__ == "__main__":
    main()
