# How to Read PlayStation 5 Error Codes via UART

*Disclaimer: This is largely a simplified version of [The Cod3rs guide](https://consoleservicetool.com/tsb/sony/playstation5/uart/gettingstarted).* 

Unlike with the PS4, where you had to reprogram the NOR in order to read UART errors, the PS5 is just completely readable as is! The only thing you'll need is a CH341A (or similar 3.3V serial reader) and some wires to solder on to the UART points.

# Usage
- First, you'll need to figure out the revision of the motherboard you're working on, it's usually written near the ports. (EDM-010, EDM-033, etc).
- Use these [reference images](https://consoleservicetool.com/tsb/sony/playstation5/uart/gettingstarted#pinouts-and-uart-locations) to figure out where on your motherboard you'll need to solder the wires too.
	- (**IMPORTANT:** RX on the motherboard goes to TX on the reader and vice versa!)
- Once you've finished attaching everything, you just need to plug the USB into a PC and plug in the power cable for the PS5. 
- Download [ConsoleServiceTool](https://github.com/amoamare/Console-Service-Tool/releases/latest) (or any other preferred UART reader) and go to the PS5 tab.
- The COM device should be automatically detected, but if you are experiencing issues you can try selecting the COM device from the dropdown menu directly.
- From there, you'll be able to issue commands, with "Read Error Codes" being selected by default.
- If there are many old error codes cluttering the feed, consider clearing the error codes and re-reading them after powering on the console. 

ConsoleServiceTool will automatically pull info about the reported errors from [UARTCodes.com](https://UARTCodes.com) but it may be worth searching for the error on other sources to see if anyone else has found a different solution.