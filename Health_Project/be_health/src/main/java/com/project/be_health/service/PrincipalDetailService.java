package com.project.be_health.service;

import com.project.be_health.config.auth.PrincipalDetail;
import com.project.be_health.domain.Member;
import com.project.be_health.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PrincipalDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        Member principal =  memberRepository.findByUserId(userId).orElseThrow(() -> new UsernameNotFoundException("해당 사용자를 찾을 수 없습니다. " + userId));
        return new PrincipalDetail(principal);
    }
}