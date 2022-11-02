package com.project.be_health.service;

import com.project.be_health.domain.Member;
import com.project.be_health.dto.member.MemberSaveRequestDto;
import com.project.be_health.dto.posts.PostsSaveRequestDto;
import com.project.be_health.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public Long save(MemberSaveRequestDto requestDto) {
        Member member = requestDto.toEntity();
        String hashPw = bCryptPasswordEncoder.encode(member.getPassword());
        member.setPassword(hashPw);
        memberRepository.save(member);
        return member.getId();
    }
}
