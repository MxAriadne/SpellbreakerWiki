# Creating a bootable macOS installer USB on Linux.

1. Download the DMG or ISO file for the macOS version needed.

2. Open terminal.

3. Run the following command to get the name of the USB drive (ie. /dev/sdb):
```
fdisk -l
```

4.  Fill in your specific drive information:
```
dd if=image.dmg  of=/dev/(drive name) bs=16M status=progress 
```

5. When that finishes you can safely eject your drive and it's good to use.