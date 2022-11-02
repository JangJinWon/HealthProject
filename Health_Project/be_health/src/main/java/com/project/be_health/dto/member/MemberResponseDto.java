//package com.project.be_health.dto.member;
//
//import com.project.be_health.domain.Member;
//import com.project.be_health.domain.Role;
//import lombok.Getter;
//
//import java.io.Serializable;
//
//@Getter
//public class MemberResponseDto implements Serializable {
//    private final Long id;
//    private final String username;
//    private final String nickname;
//    private final String email;
//    private final Role role;
//    private final String modifiedDate;
//
//    public MemberResponseDto(Member entity){
//        this.id = entity.getId();
//        this.username = entity.getUsername();
//        this.nickname = entity.getNickname();
//        this.email = entity.getEmail();
//        this.role = entity.getRole();
//        this.modifiedDate = entity.getModifiedDate();
//    }
//
//}
