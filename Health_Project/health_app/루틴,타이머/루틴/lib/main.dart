import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'listPage.dart';
import 'controller/mainController.dart';

void main() => runApp(GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          brightness: Brightness.light,
          primaryColor: Colors.blue,
          accentColor: Colors.orange),
      home: MyApp(),
    ));

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String input = "";

  @override
  void initState() {}

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(mainController());

    return Scaffold(
      appBar: AppBar(
        title: Text(""),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showDialog(
              context: context,
              builder: (BuildContext context) {
                return AlertDialog(
                    title: Text("Add Todolist"),
                    content: TextField(
                      onChanged: (String value) {
                        input = value;
                      },
                    ),
                    actions: <Widget>[
                      FlatButton(
                          onPressed: () {
                            controller.setName(input);
                            Navigator.of(context).pop();
                          },
                          child: Text("Add"))
                    ]);
              });
        },
        child: Icon(
          Icons.add,
          color: Colors.white,
        ),
      ),
      body: GetBuilder<mainController>(builder: (_) {
        return ListView.builder(
            itemCount: controller.mainName.length,
            itemBuilder: (BuildContext context, int index) {
              return Dismissible(
                key: Key(controller.mainName[index]),
                onDismissed: (direction) {
                  controller.delName(index);
                },
                child: Card(
                    child: ListTile(
                  title: Text(controller.mainName[index]),
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => listPage(index: index,)));
                  },
                )),
              );
            });
      }),
    );
  }
}
