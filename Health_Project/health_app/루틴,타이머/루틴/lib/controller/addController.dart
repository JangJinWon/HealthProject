import 'package:get/get.dart';


class addController extends GetxController {
  List full = [];

  void setFull(List s){
    full.add(s);
    update();
  }
}