# How To Test an SMD Mosfet.

#### This is a diagram of a typical mosfet. 
![[Pasted image 20241116142626.png]]

1. In continuity mode, test for continuity between:
	1. Gate <-> Source (Should not have continuity)
	2. Drain <-> Gate (Should not have continuity)
	3. Drain <-> Source (Should not have continuity)
2. The drain pins are on the same plane and should have continuity between each other.
3. The source pins are also on the same plan and should have continuity between each other.
4. In voltage mode, test the receiving and outputting voltages on source and gate respectively, gate should be at or below source.