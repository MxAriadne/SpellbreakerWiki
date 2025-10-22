The most popular option, and most often recommended, for installing Windows 11 on an incompatible system is to make a USB installer with Rufus and simply check the boxes to bypass requirements. However, there is another method if you don't want to bother backing up data, etc.


### Option 1:

1. [Download the Windows 11 ISO.](https://www.microsoft.com/en-us/software-download/windows11) 
   (This method is tested working on 24H2, I haven't used it on the newer updates but I have no reason to believe this won't continue to work.)  
<br />
2. Either extract the files to a folder using a program like [WinRAR](https://www.rarlab.com/download.htm) or [7zip](https://www.7-zip.org/download.html) 
   **OR** you can mount the ISO as a drive by right-clicking the file and selecting "Mount". 
<br />
3. Open Command Prompt.
<br />
4. If you extracted to a folder, get the path and run this command: 
   `cd C:\<path to folder>\sources`
<br />
5. If you mounted the ISO as a drive, find the drive letter and run this command instead: 
   `cd <drive letter>:\sources`
<br />
6. Enter the following command:
   `.\setup.exe\ /product server`
<br />
7. This will start the Windows 11 update tool, and despite the banner at the top, rest assured it will be updating to the version of the ISO, not installing Windows Server edition. 
<br />
8. During the update process, you must unselect the option to check for updates during the installation. If you don't do this, it will recognize your PC is incompatible and fail the upgrade.
<br />
9. That's all!

*If you encounter a **"The processor isn't supported by this version of Windows"** error then you need to find the file "appraiserres.dll" in the sources folder, right-click and select open with Notepad. Delete all of the text in the file, and then save it. Now redo the upgrade process.*


### Option 2:

GitHub user Asheroto has created a PowerShell script that edits the registry to allow updates.
If you want to try that option, [follow their guide on their GitHub](https://gist.github.com/asheroto/5087d2a38b311b0c92be2a4f23f92d3e).
<br />
Disclaimer: I have not tested this method, so you may have mixed results.