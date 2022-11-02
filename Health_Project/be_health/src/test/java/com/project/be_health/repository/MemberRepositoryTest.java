package com.project.be_health.repository;//package com.project.be_health.repository;
//
//import com.project.be_health.domain.Member;
//import com.project.be_health.domain.Role;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@ExtendWith(SpringExtension.class)
//@SpringBootTest
//public class MemberRepositoryTest {
//    @Autowired
//    MemberRepository memberRepository;
//
//    @AfterEach
//    public void cleanup() {
//        memberRepository.deleteAll();
//    }
//
//    @Test
//    public void 회원가입_테스트() {
//        //given
//        String userId = "testId";
//        String username = "seokwon";
//        String nickname = "Test_nick";
//
//        memberRepository.save(Member.builder()
//                .userId(userId)
//                .username(username)
//                .password("1234")
//                .gender("남")
//                .year("1998")
//                .month("6")
//                .day("18")
//                .email("test@naver.com")
//                .role(Role.USER)
//                .build());
//
//        //when
//        List<Member> memberList = memberRepository.findAll();
//
//        //then
//        Member member = memberList.get(0);
//        assertThat(member.getUsername()).isEqualTo(username);
//    }
//}
