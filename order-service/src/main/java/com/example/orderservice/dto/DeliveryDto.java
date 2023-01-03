package com.example.orderservice.dto;

import com.example.orderservice.jpa.OrderEntity;
import lombok.Data;

@Data
public class DeliveryDto {

    private Long id;
    private OrderEntity orderEntity;
    private DeliveryStatus deliveryStatus; //READY, COMP
}
