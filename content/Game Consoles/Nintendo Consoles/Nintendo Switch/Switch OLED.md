# Switch OLED

| Problem Description           | Symptoms | Solution                                                                                                                                                                                                                       | Source                                                                                                                                               |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| No display when docked.       |          | - If you have a mechanic port tester and pin 8 & 17 report 0L, test this choke:<br>![[Pasted image 20240822032717.png]]<br><br>- Can also be caused by a bad P13. On this model you can test the capacitor next to it to test. | [Source](https://www.youtube.com/watch?v=pUD1rkYmXm4)<br><br>[Source](https://repair.wiki/w/How_To_Fix_Nintendo_Switch_OLED_With_No_HDMI_Output)<br> |
| Orange Screen of Death (OSoD) |          | Replace Bluetooth/WiFi card.                                                                                                                                                                                                   |                                                                                                                                                      |
### Diode Reading Pin/Fault Diagram
You can read these values with a Tail Insertion Tester or a 24 pin USB-C breakout board.
If the diode reading is low or missing you can use this chart to pinpoint the fault.

![[Nintendo_Switch_Tail_Insertion_Pinout_Correlations.png]]