// // Automatic FlutterFlow imports
// import '/flutter_flow/flutter_flow_theme.dart';
// import '/flutter_flow/flutter_flow_util.dart';
// import '/custom_code/widgets/index.dart'; // Imports other custom widgets
// import '/custom_code/actions/index.dart'; // Imports custom actions
// import '/flutter_flow/custom_functions.dart'; // Imports custom functions
// import 'package:flutter/material.dart';
// // Begin custom widget code
// // DO NOT REMOVE OR MODIFY THE CODE ABOVE!

// import 'index.dart'; // Imports other custom widgets

// import 'index.dart'; // Imports other custom widgets

// import 'index.dart'; // Imports other custom widgets

// import 'package:mobile_scanner/mobile_scanner.dart';
// import 'dart:io';
// import 'package:dhl_figma/components/success_msg_inbound/success_msg_inbound_widget.dart';

// class Testscanner extends StatefulWidget {
//   const Testscanner({
//     super.key,
//     this.width,
//     this.height,
//   });

//   final double? width;
//   final double? height;

//   @override
//   State<Testscanner> createState() => _TestscannerState();
// }

// class _TestscannerState extends State<Testscanner> with WidgetsBindingObserver {
//   MobileScannerController controller =
//       MobileScannerController(facing: CameraFacing.front);
//   bool isProcessing = false;
//   CameraFacing cameraFacing = CameraFacing.front;

//   @override
//   void initState() {
//     super.initState();
//     WidgetsBinding.instance.addObserver(this);
//     initializeScanner();
//   }

//   @override
//   void reassemble() {
//     super.reassemble();
//     if (Platform.isAndroid) {
//       controller.stop();
//     }
//     initializeScanner();
//   }

//   @override
//   void didChangeAppLifecycleState(AppLifecycleState state) {
//     super.didChangeAppLifecycleState(state);
//     switch (state) {
//       case AppLifecycleState.resumed:
//         initializeScanner();
//         break;
//       case AppLifecycleState.inactive:
//       case AppLifecycleState.paused:
//       case AppLifecycleState.detached:
//         controller.stop();
//         break;
//       default:
//         break;
//     }
//   }

//   Future<void> initializeScanner() async {
//     try {
//       await controller.start();
//       await controller.setZoomScale(0.7);
//     } catch (error) {
//       print('Error starting scanner: $error');
//     }
//   }

//   @override
//   void dispose() {
//     controller.dispose();
//     WidgetsBinding.instance.removeObserver(this);
//     super.dispose();
//   }

//   Future<void> _toggleCamera() async {
//     setState(() {
//       cameraFacing = (cameraFacing == CameraFacing.front)
//           ? CameraFacing.back
//           : CameraFacing.front;
//     });
//     controller.switchCamera();
//   }

//   @override
//   Widget build(BuildContext context) {
//     var orientation = MediaQuery.of(context).orientation;
//     return Scaffold(
//       body: RotatedBox(
//         quarterTurns: orientation == Orientation.portrait ? 0 : -1,
//         child: Stack(
//           children: [
//             MobileScanner(
//               controller: controller,
//               onDetect: (barcodeCapture) async {
//                 if (isProcessing) return;
//                 setState(() {
//                   isProcessing = true;
//                 });

//                 final String? code = barcodeCapture.barcodes.first.rawValue;
//                 if (code != null) {
//                   // Store the scanned value in FFAppState if not already present
//                   FFAppState().productscanedlist.add(code);
//                   FFAppState().update(() {});

//                   await showDialog(
//                     context: context,
//                     barrierDismissible: false,
//                     builder: (BuildContext context) {
//                       return SuccessMsgInboundWidget(
//                           productid: code); // Pass scannedValue here
//                     },
//                   );

//                   print('Scanned value added: $code');
//                 }

//                 // Allow scanning again after a short delay
//                 Future.delayed(const Duration(milliseconds: 800), () {
//                   setState(() {
//                     isProcessing = false;
//                   });
//                 });
//               },
//             ),
//             Positioned(
//               bottom: 12.0,
//               left: 0,
//               right: 0,
//               child: SizedBox(
//                 width: 40,
//                 height: 40,
//                 child: FloatingActionButton(
//                   onPressed: _toggleCamera,
//                   backgroundColor: Color(0xFF4D4D4D),
//                   child: Icon(
//                     Icons.switch_camera,
//                     color: Color(0xFFFFCC00),
//                   ),
//                   mini: true,
//                 ),
//               ),
//             ),
//             Positioned(
//               bottom: 12.0,
//               left: 12.0,
//               child: SizedBox(
//                 width: 40,
//                 height: 40,
//                 child: FloatingActionButton(
//                   onPressed: () async {
//                     double currentZoom = controller.zoomScaleState.value;
//                     await controller
//                         .setZoomScale((currentZoom - 0.1).clamp(0.0, 1.0));
//                   },
//                   backgroundColor: Color(0xFF4D4D4D),
//                   child: Icon(
//                     Icons.zoom_out,
//                     color: Color(0xFFFFCC00),
//                   ),
//                   mini: true,
//                 ),
//               ),
//             ),
//             Positioned(
//               bottom: 12.0,
//               right: 12.0,
//               child: SizedBox(
//                 width: 40,
//                 height: 40,
//                 child: FloatingActionButton(
//                   onPressed: () async {
//                     double currentZoom = controller.zoomScaleState.value;
//                     await controller
//                         .setZoomScale((currentZoom + 0.1).clamp(0.0, 1.0));
//                   },
//                   backgroundColor: Color(0xFF4D4D4D),
//                   child: Icon(
//                     Icons.zoom_in,
//                     color: Color(0xFFFFCC00),
//                   ),
//                   mini: true,
//                 ),
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }