//package com.project.be_health.dto.member;
//
//import com.project.be_health.domain.Member;
//import com.project.be_health.domain.Role;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.Pattern;
//
//@Data
//@NoArgsConstructor
//public class MemberRequestDto {
//    @Pattern(regexp = "^[ㄱ-ㅎ가-힣a-z0-9-_]{4,20}$", message = "아이디는 특수문자를 제외한 4~20자리여야 합니다.")
//    @NotBlank(message = "아이디는 필수 입력 값입니다.")
//    private String username;
//
//    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
//    private String password;
//
//    @Pattern(regexp = "^[ㄱ-ㅎ가-힣a-z0-9-_]{2,10}$", message = "닉네임은 특수문자를 제외한 2~10자리여야 합니다.")
//    @NotBlank(message = "닉네임은 필수 입력 값입니다.")
//    private String nickname;
//
//    @Pattern(regexp = "^(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
//    @NotBlank(message = "이메일은 필수 입력 값입니다.")
//    private String email;
//
//    private Role role;
//
//    @Builder
//    public MemberRequestDto(String username, String password, String nickname, String email, Role role){
//        this.username = username;
//        this.password = password;
//        this.nickname = nickname;
//        this.email = email;
//        this.role = role;
//    }
//
//    /* DTO -> Entity */
//    public Member toEntity() {
//        return Member.builder()
//                .username(username)
//                .password(password)
//                .nickname(nickname)
//                .email(email)
//                .role(role.USER)
//                .build();
//    }
//}
//
