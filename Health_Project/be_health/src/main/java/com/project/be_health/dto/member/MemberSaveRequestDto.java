package com.project.be_health.dto.member;

import com.project.be_health.domain.Member;
import com.project.be_health.domain.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class MemberSaveRequestDto {
    private String userId; // 아이디
    private String password;
    private String nickname;  //닉네임
    private String name; // 사용자 이름
    private String gender;  // 성별

    private String year;
    private String month;
    private String day;
    private String email;

    private Role role;

    @Builder
    public MemberSaveRequestDto(String userId, String password,String nickname, String name,
                                String gender, String year, String month, String day, String email, Role role) {
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.gender = gender;
//        this.year = year;
//        this.month = month;
//        this.day = day;
        this.email = email;
        this.role = role;
    }

    public  Member toEntity( ) {
        return Member.builder()
                .userId(userId)
                .password(password)
                .nickname(nickname)
                .name(name)
                .gender(gender)
//                .year(year)
//                .month(month)s
//                .day(day)
                .email(email)
                .role(Role.USER)
                .build();
    }
}



