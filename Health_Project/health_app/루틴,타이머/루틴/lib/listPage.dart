import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:routine/controller/addController.dart';
import 'package:routine/controller/mainController.dart';

import 'exAddPage.dart';

class listPage extends StatefulWidget {
  listPage({required this.index});

  int index;

  @override
  State<listPage> createState() => _listPageState();
}

class _listPageState extends State<listPage> {
  late Timer _timer;
  var _time = 0;
  late List full;

  @override
  Widget build(BuildContext context) {
    full = Get.find<mainController>().mainFull[widget.index];
    final AddController = Get.put(addController());
    var minute = '${_time ~/ 60}'.padLeft(2, '0');
    var sec = '${_time % 60}'.padLeft(2, '0');
    String name='',kg='',set='';

    return Scaffold(
      appBar: AppBar(
        title: Text(""),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showDialog(
              context: context,
              builder: (context) => AlertDialog(
                    title: Text('test'),
                    content: Column(
                      children: [
                        TextField(
                          decoration: InputDecoration(hintText: '운동명'),
                          onChanged: (String value) {
                            name = value;
                          },
                        ),
                        TextField(
                          decoration: InputDecoration(hintText: 'Kg'),
                          onChanged: (String value) {
                            kg = value;
                          },
                        ),
                        TextField(
                          decoration: InputDecoration(hintText: 'Set'),
                          onChanged: (String value) {
                            set = value;
                          },
                        ),
                      ],
                    ),
                    actions: [
                      TextButton(
                        child: Text('확인'),
                        onPressed: () {
                          List temp=[];
                          temp.add(name);
                          temp.add(kg);
                          temp.add(set);
                          full.add(temp);
                          AddController.update();
                          Get.back();
                        },
                      ),
                      TextButton(
                        child: Text('취소'),
                        onPressed: () {
                          Get.back();
                        },
                      )
                    ],
                  ));
          // Navigator.push(
          //     context, MaterialPageRoute(builder: (context) => exAdd()));
        },
        child: Icon(
          Icons.add,
          color: Colors.white,
        ),
      ),
      body: GetBuilder<addController>(
        builder: (_) {
          return Container(
              margin: EdgeInsets.all(10),
              color: Colors.black,
              child: Column(
                children: [
                  Expanded(
                      flex: 3,
                      child: Container(
                        color: Colors.white,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              '${minute} ',
                              style: TextStyle(fontSize: 100),
                            ),
                            Text(
                              ': ${sec}',
                              style: TextStyle(fontSize: 100),
                            ),
                          ],
                        ),
                      )),
                  Expanded(
                    flex: 5,
                    // child: GetBuilder<addController>(builder: (_) {
                    //   return
                    child: Container(
                      color: Colors.grey,
                      child: ListView.builder(
                          itemCount: full.length,
                          // itemCount: AddController.full.length,
                          itemBuilder: (BuildContext context, int index) {
                            return Dismissible(
                              key: Key(full[index].toString()),
                              // key: Key(AddController.full[index].toString()),
                              onDismissed: (direction) {
                                full.removeAt(index);
                              },
                              child: Card(
                                child: Column(
                                  children: [
                                    full.isEmpty
                                        ? Container()
                                        : Text(
                                            '운동 : ${full[index][0]}   Kg : ${full[index][1]}    Set : ${full[index][2]}',
                                            style: TextStyle(fontSize: 20),
                                          ),
                                    // TextButton(onPressed: (){print(full[1][0]);}, child: Text('button'))
                                  ],
                                ),
                              ),
                            );
                          }),
                    ),
                    // }),
                  ),
                  Expanded(
                      flex: 1,
                      child: Container(
                        color: Colors.grey.shade700,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            ButtonBar(
                              children: [
                                OutlinedButton(
                                    onPressed: () => setState(() {
                                          _timer = Timer.periodic(
                                              Duration(seconds: 1), (timer) {
                                            setState(() {
                                              _time++;
                                            });
                                          });
                                        }),
                                    child: const Text('운동시작')),
                                FlatButton(
                                    onPressed: () => setState(() {
                                          _timer.cancel();
                                        }),
                                    child: const Text('운동종료')),
                              ],
                            ),
                          ],
                        ),
                      )),
                ],
              ));
        }
      ),
    );
  }
}
