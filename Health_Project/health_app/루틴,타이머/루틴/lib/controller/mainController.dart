import 'package:get/get.dart';

class mainController extends GetxController{
  List mainName = [];
  List<List> mainFull = [];

  void setName(String s) {
    mainName.add(s);
    mainFull.add([]);
    update();
  }void setFull(String s) {
    mainName.add(s);
    update();
  }
  void delName(int i){
    mainName.removeAt(i);
    mainFull.removeAt(i);
    update();
  }
}