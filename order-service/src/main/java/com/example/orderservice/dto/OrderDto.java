package com.example.orderservice.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class OrderDto implements Serializable {
    private String productId;//RequestOrder
    private Integer qty;//RequestOrder
    private Integer unitPrice;//RequestOrder
    private Integer totalPrice;

    private String orderId;
    private String userId;
}
