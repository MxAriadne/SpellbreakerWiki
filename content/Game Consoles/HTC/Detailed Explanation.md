# Detailed Explanation

For now, the simplest solution is to manually edit Vive's OSC Ports and update to the latest software via VIVE Console.

1. **Uninstall any old VIVE face tracking software** (e.g., SRanipal) and ensure that VIVE's streaming software is installed for PCVR connection.
    
2. **Required Software:**
    
    - **VIVE Console:** [Download from Steam](https://store.steampowered.com/app/1635730/VIVE_Console_for_SteamVR/)  
        (This includes the latest SRanipal software, so there's no need to install it separately.)
    - **VRCFT:** [Download from VRCFT Documentation](https://docs.vrcft.io/docs/vrcft-software/vrcft)
3. **Initial Setup:**
    
    - Open the programs, allowing SteamVR to open (even if the headset isn't on).
    - In the VRCFT Module install, install the SRanipal module.
    - In the settings, enable "Calibration" and "Continuous Calibration."
    - Close SteamVR and any other programs that opened. This step allows any missing data to populate.
4. **Edit Configuration Files:**
    
    - Go to `C:\ProgramData\HTC\ViveSoftware\ViveRR\RRServer`
        
    - Open and edit both files:
        
        - `serverSettings.settings`
        - `serverSettings.settings.sync`
    - At the bottom of each file, you should find `"RAPILPS": 100,`. After that line, paste the following text:
        `"MMF": false,` 
        `"VOF": false,` 
        `"VRCSP": 9012,` 
        `"VRCRP": 9013,` 
        `"VRCHN": "localhost",` 
        `"PL": 0`
    
    _Note:_ Some users have reported better response with `"PL": 2` instead.
    
5. **Final Steps:**
    
    - Reboot your PC and start SteamVR with VIVE connected.
    - Open VCRFT and then the social app you're using.

At first, some expressions may not show, but continue using it, and the Continuous Calibration should fix and smooth out any issues. Calibration can take a few expressions or a few minutes of use, depending on whether you've used a previous face tracker.