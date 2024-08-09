package com.bookly.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookly.entities.PaymentDetail;

public interface OrderItemDao extends JpaRepository<PaymentDetail, Long>{

}
