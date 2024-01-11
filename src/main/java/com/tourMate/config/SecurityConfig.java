package com.tourMate.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public CorsConfiguration corsConfiguration() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.setAllowedMethods(Arrays.asList(
                HttpMethod.POST.name(),
                HttpMethod.GET.name(),
                HttpMethod.DELETE.name(),
                HttpMethod.PUT.name()
        ));
        config.setMaxAge(3600L);
        return config;
    }


    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration());
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(-102);
        return bean;
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests((authz) -> {
                            try {
                                authz
                                        .requestMatchers(new AntPathRequestMatcher("/1/hasBusiness")).permitAll()
                                        .requestMatchers(new AntPathRequestMatcher("/business/1/unapproved")).permitAll()
                                        .requestMatchers(new AntPathRequestMatcher("/register")).permitAll()
                                        .requestMatchers(new AntPathRequestMatcher("/hotel/search")).permitAll()
                                        .requestMatchers(new AntPathRequestMatcher("/transport/search")).permitAll()
                                        .requestMatchers(new AntPathRequestMatcher("/business/*")).hasAnyAuthority("SUPERADMIN")
                                        .anyRequest().authenticated()
                                        .and()
                                        .formLogin().loginPage("http://localhost:3000/login")
                                        .loginProcessingUrl("/api/login").usernameParameter("username").passwordParameter("password")
                                        .successHandler((request, response, authentication) -> {
                                            response.setStatus(HttpServletResponse.SC_OK);
                                            response.setContentType("application/json");
                                            response.getWriter().print("{\"message\": \"Login successful\",");
                                            response.getWriter().print("\"auth\":" + new ObjectMapper().writeValueAsString(authentication) + "}");
                                            response.getWriter().flush();
                                        })
                                        .failureHandler((request, response, exception) -> {
                                            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                                            response.getWriter().print("Pukla veza\n" + exception.getMessage());
                                            response.getWriter().flush();
                                        })
                                        .permitAll()
                                        .and()
                                        .sessionManagement()
                                        .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                                        .and()
                                        .logout()
                                        .permitAll();

                            } catch (Exception e) {
                                throw new RuntimeException(e);
                            }
                        }
                ).httpBasic();
        return http.build();
    }
}
