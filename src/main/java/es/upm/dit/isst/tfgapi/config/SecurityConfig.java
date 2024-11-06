package es.upm.dit.isst.tfgapi.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests() //Define who can access the resources
            .antMatchers("/").permitAll()
            .antMatchers("/login").permitAll()
            .antMatchers("/medico").hasAnyRole("MEDICO")
            .antMatchers("/turno/**").permitAll()
            .antMatchers("/paciente").permitAll()
            .antMatchers("/citas/new").permitAll()
            .anyRequest().authenticated().and()
            .formLogin().loginPage("/login.html").successHandler(myAuthenticationSuccessHandler()).permitAll().and()
            .logout().logoutSuccessUrl("/login.html").permitAll().and()
            .httpBasic().and()
            .csrf().disable();
    }

    @Override
    public void configure(WebSecurity web) throws Exception{
        web     
            .ignoring()
            .antMatchers("/h2-console/**");
    }
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public AuthenticationSuccessHandler myAuthenticationSuccessHandler(){
        return new MySimpleUrlAuthenticationSuccessHandler();
    }

    @Autowired
    DataSource ds;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.jdbcAuthentication().dataSource(ds)
            .usersByUsernameQuery("select username, password, enabled from users where username = ?")
            .authoritiesByUsernameQuery("select username, authority from authorities where username = ?");
    }
}
