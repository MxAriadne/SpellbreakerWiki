# Windows 10 or 11 installer doesn't detect NVMe drive.

1. Download [Intel IRST Setup.exe](https://www.intel.com/content/www/us/en/download/19512/intel-rapid-storage-technology-driver-installation-software-with-intel-optane-memory-10th-and-11th-gen-platforms.html)

2. Open terminal in the directory with SetupRST.exe by right-clicking the directory and selecting "Open in Terminal" or "Open PowerShell here"

3. Enter the following command: ./SetupRST.exe -extractdrivers SetupRST_extracted

4. On the USB drive you’re using, make a new folder called “Drivers”

5. Move all of the files within “SetupRST_extracted” into “Drivers”

6. During the OS installation, click 'Load Driver' to install the IRST driver.

7. Follow the prompts and browse to the location of the installation files. Select the appropriate ‘.inf’ file (64 or 32 bit).

8. If you don’t see the driver in the list, uncheck the box that says “Don’t show drivers incompatible with current hardware.”

9. Refresh the list of drives.
