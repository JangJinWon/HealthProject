package com.project.be_health.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

//@Getter
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
//@Entity
//public class Member extends BaseTimeEntity {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(nullable = false, length = 30, unique = true)
//    private String userId; // 아이디
//
//    @Column(nullable = false, length = 100)
//    private String password;
//
////    @Column(nullable = false, unique = true)
////    private String nickname;  //닉네임
//    @Column(nullable = false, length = 30)
//    private String username; // 사용자 이름
//
//    private String gender;  // 성별
//
//    @Column(nullable = false)
//    private String year;
//    @Column(nullable = false)
//    private String month;
//    @Column(nullable = false)
//    private String day;
//
//    @Column(nullable = false, length = 50, unique = true)
//    private String email;
//
//    @Enumerated(EnumType.STRING)
//    @Column(nullable = false)
//    private Role role;
//}
@Getter
@NoArgsConstructor
@Entity
@Table(name = "user_table")
public class Member{
    @Id // 해당 테이블의 PK 필드를 나타냄
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK의 생성 규칙을 나타냄
    private Long id;

    @Column(nullable = false, length = 20, unique = true)
    private String userId; // 아이디

    @Column(nullable = false, length = 100)
    private String password;

    @Column(nullable = false, unique = true)
    private String nickname;  //닉네임
    @Column(nullable = false, length = 30)
    private String name; // 사용자 이름

    private String gender;  // 성별

//    @Column(nullable = false)
//    private String year;
//    @Column(nullable = false)
//    private String month;
//    @Column(nullable = false)
//    private String day;   // error

    @Column(nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Builder
    public Member(String userId, String password,String nickname, String name, String gender,
                  String year, String month, String day, String email, Role role) {
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.gender = gender;
//        this.year = year;
//        this.month = month;
//        this.day = day;   // error
        this.email = email;
        this.role = role;
    }

    public void setPassword(String password){
        this.password = password;
    }
    public String getRoleKey() {
        return this.role.getKey();
    }
    public void update(String password, String nickname) {
        this.password = password;
        this.nickname = nickname;
    }
}