package com.example.Supermarket.repository;

import com.example.Supermarket.entity.OrdersUser;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOrdersRepository extends JpaRepository<OrdersUser, Integer> {
}
