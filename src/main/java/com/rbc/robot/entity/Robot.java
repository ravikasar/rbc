package com.rbc.robot.entity;

import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.Entity;
@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Robot {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
}