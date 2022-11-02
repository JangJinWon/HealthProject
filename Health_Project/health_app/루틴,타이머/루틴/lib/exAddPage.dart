import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:routine/controller/addController.dart';

class exAdd extends StatefulWidget {
  @override
  State<exAdd> createState() => _exAdd();
}

class _exAdd extends State<exAdd> {
  String name = '';
  String kg = '';
  String set = '';


  @override
  Widget build(BuildContext context) {

    return Scaffold(
        appBar: AppBar(),
        body: ListView(
          padding: EdgeInsets.symmetric(horizontal: 24.0),
          children: [
            SizedBox(height: 20),
            TextField(
              decoration: InputDecoration(
                  filled: true,
                  labelText: '운동명'
              ),
              onChanged: (String value) {
                name = value;
              },
            ),
            SizedBox(height: 20),
            TextField(
              decoration: InputDecoration(
                  filled: true,
                  labelText: 'Kg'
              ),
              onChanged: (String value) {
                kg = value;
              },
            ),
            SizedBox(height: 20),
            TextField(
              decoration: InputDecoration(
                  filled: true,
                  labelText: 'Set'
              ),
              onChanged: (String value) {
                set = value;
              },
            ),
            SizedBox(height: 20),
            ButtonBar(
              children: [
                FlatButton(
                    onPressed: () {
                      List temp =[];
                      temp.add(name);
                      temp.add(kg);
                      temp.add(set);
                      Get.find<addController>().setFull(temp);
                      Navigator.of(context).pop();
                    },
                    child: Text("확인")),
                FlatButton(
                    onPressed: () {
                      Navigator.of(context).pop(); // input 입력 후 창 닫히도록
                    },
                    child: Text("취소"))
              ],
            )
          ],
        ));
  }
}
