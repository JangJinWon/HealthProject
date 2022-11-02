import 'package:flutter/material.dart';
import 'package:health/main.dart';

void main() {
  runApp(const MyApp());
}

class Water extends StatefulWidget {
  const Water({Key? key}) : super(key: key);

  @override
  _Water createState() => _Water();

  Widget build(BuildContext context) {
    return const MaterialApp(
      title: '플러터 앱',
      debugShowCheckedModeBanner: false, // debug 표시 보지않기
      home: Scaffold(
        body: Text("현재 물 섭취 량"),
      ),
    );
  }
}

// 팝업
// class Popup extends StatelessWidget {
//   const Popup({Key? key}) : super(key: key);
//
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Welcome to Flutter'),
//         ),
//         body: Center(
//           child: FlatButton(
//             child: const Text('Alert Dialog'),
//             onPressed: () async {
//               return alert(
//                 context,
//                 title:  Text('Alert'),
//                 content: Text('It is fun!'),
//                 textOK: Text('Yes'),
//               );
//             },
//           ),
//         ),
//       ),
//     );
//   }
// }

// void _showDialog() {
//   // ignore: prefer_typing_uninitialized_variables
//   var context;
//   showDialog(
//     context: context,
//     builder: (BuildContext context) {
//       // return object of type Dialog
//       return AlertDialog(
//         title: const Text("Alert Dialog title"),
//         content: const Text("Alert Dialog body"),
//         actions: <Widget>[
//           ElevatedButton(
//             child: const Text("Close"),
//             onPressed: () {
//               Navigator.pop(context);
//             },
//           ),
//         ],
//       );
//     },
//   );
// }

// 팝업창

class _Water extends State<Water> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HealthTogether'),
      ),
      body: Center(
        child: Container(
            margin: EdgeInsets.all(0),
            color: Colors.black,
            child: Column(
              children: [
                Expanded(
                    flex: 1,
                    child: Container(
                      color: Colors.white,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text(
                            '오늘 섭취량',
                            style: TextStyle(fontSize: 15),
                          )
                          // 1번째칸
                        ],
                      ),
                    )),
                Expanded(
                    flex: 1,
                    child: Container(
                      color: Colors.white,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children:  [
                          Container(
                            margin: EdgeInsets.only( left: 410,right: 20),

                          child: Text(
                            '목표 섭취량',
                            style: TextStyle(fontSize: 13, color: Colors.blue),
                            textAlign: TextAlign.right,
                          ),
                          ),
                          Container(
                            margin: EdgeInsets.only( left: 410,right: 20,bottom: 20),
                            child:TextField(
                              decoration: InputDecoration(
                                isDense: true,
                                contentPadding: EdgeInsets.all(5),
                              ),
                            ),
                          )
                        ],

                        //2번
                      ),
                    )),
                Expanded(
                    flex: 5,
                    child: Container(
                      color: Colors.grey,
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [

                          ]
                          //3번
                          ),
                    )),
                Expanded(
                    flex: 2,
                    child: Container(
                      color: Colors.white,
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              margin: EdgeInsets.only(top: 10,left: 20),
                              child: Text('남은 섭취량',
                              style: TextStyle(fontSize: 13,color: Colors.blue),),
                            ),
                            Container(
                              margin: EdgeInsets.only(top: 10,left: 110),
                              child: Text('현재 섭취량',
                                style: TextStyle(fontSize: 13,color: Colors.blue),),
                            ),
                            Container(
                              margin: EdgeInsets.only(top: 10,left: 150,bottom: 20),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  ElevatedButton(onPressed: FlutterDialog, child: Text("설정하기"),
                                      )
                                ],
                              ),
                            )
                          ]
                        //4번
                      ),
                    )),
                Expanded(
                    flex: 1,
                    child: Container(
                      color: Colors.grey.shade700,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ButtonBar(
                            children: [
                              FlatButton(
                                  onPressed: () => setState(() {}),
                                  child: const Text('운동종료')),
                            ],
                          ),
                        ],
                      ),
                    )),
              ],
            )),
      ),
    );
  }

  // ignore: non_constant_identifier_names
  void FlutterDialog() {
    showDialog(
        context: context,
        //barrierDismissible - Dialog를 제외한 다른 화면 터치 x
        barrierDismissible: false,
        builder: (BuildContext context) {
          return AlertDialog(
            // RoundedRectangleBorder - Dialog 화면 모서리 둥글게 조절
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0)),
            //Dialog Main Title
            title: Column(
              children: const <Widget>[
                TextField(
                    decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: '자신의 몸무게',
                )),
              ],
            ),
            //
            content: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const <Widget>[
                Text(
                  "Dialog Content",
                ),
              ],
            ),
            actions: <Widget>[
              ElevatedButton(
                child: const Text("확인"),
                onPressed: () {
                  Navigator.pop(context);
                },
              ),
            ],
          );
        });
  }
}
