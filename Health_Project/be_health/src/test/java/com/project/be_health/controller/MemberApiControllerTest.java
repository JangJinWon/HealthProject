package com.project.be_health.controller;//package com.project.be_health.controller;
//
//import com.project.be_health.domain.Member;
//import com.project.be_health.domain.Role;
//import com.project.be_health.dto.member.MemberSaveRequestDto;
//import com.project.be_health.repository.MemberRepository;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.test.web.server.LocalServerPort;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@ExtendWith(SpringExtension.class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//public class MemberApiControllerTest {
//    @LocalServerPort
//    private int port;
//
//    @Autowired
//    private TestRestTemplate restTemplate;
//
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @AfterEach
//    public void cleanup() {
//        memberRepository.deleteAll();
//    }
//
//    @Test
//    public void 회원가입완료_테스트() throws Exception {
//        //given
//        String userId = "testId";
//        String username = "seokwon";
//        String nickname = "Test_nick";
//
//        MemberSaveRequestDto memberSaveRequestDto = MemberSaveRequestDto.builder()
//                .userId(userId)
//                .username(username)
//                .password("1234")
//                .gender("남")
//                .year("1998")
//                .month("6")
//                .day("18")
//                .email("test@naver.com")
//                .role(Role.USER)
//                .build();
//
//        String url = "http://localhost:" + port + "/api/user";
//
//        //when
//        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, memberSaveRequestDto, Long.class);
//
//        //then
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isGreaterThan(0L);
//
//        List<Member> userList = memberRepository.findAll();
//        assertThat(userList.get(0).getUsername()).isEqualTo(username);
//    }
//}
