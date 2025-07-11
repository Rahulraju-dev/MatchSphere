package com.dating.Dating_Recomendation_Engine.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dating.Dating_Recomendation_Engine.entity.User;
import com.dating.Dating_Recomendation_Engine.util.UserGender;

public interface UserRepository extends JpaRepository<User, Integer>{

	List<User> findByGender(UserGender male);

	List<User> findUserByAge(int age);

	Optional<User> findUserByName(String name);

	List<User> findUserByPhone(long phone);

	Optional<User> findUserByEmail(String email);
	
	@Query("select u from User u where u.name like ?1")
	List<User> searchByName(String letters);
	@Query("select u from User u where u.email like ?1")
	List<User> searchByEmail(String letters);

		
}
