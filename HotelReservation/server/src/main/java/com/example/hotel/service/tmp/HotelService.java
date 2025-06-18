/*
package com.example.hotel.service;

import com.example.hotel.model.Hotel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Arrays;

@Service
public class HotelService {
    public List<Hotel> getAllHotels() {
        return Arrays.asList(
            new Hotel(1L, "글래드 마포", "/images/hotel1.jpg", 175000),
            new Hotel(2L, "글래드 여의도", "/images/hotel2.jpg", 150000)
        );
    }

    public List<Hotel> getAllHotels() {
        return hotelList;
    }

    public Hotel getHotelById(Long id) {
        return hotelList.stream().filter(h -> h.getId().equals(id)).findFirst().orElse(null);
    }
}
*/


// old coding
/*
package com.example.hotel.service;

import com.example.hotel.model.Hotel;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class HotelService {

    private List<Hotel> hotelList = Arrays.asList(
        new Hotel(1L, "글래드 마포", "/images/hotel1.jpg", 175000),
        new Hotel(2L, "글래드 여의도", "/images/hotel2.jpg", 150000)
    );

    public List<Hotel> getAllHotels() {
        return hotelList;
    }

    public Hotel getHotelById(Long id) {
        return hotelList.stream().filter(h -> h.getId().equals(id)).findFirst().orElse(null);
    }
}
*/



