package com.tourMate.controllers;

import com.tourMate.dto.HotelDto;
import com.tourMate.entities.*;
import com.tourMate.services.HotelManager;
import com.tourMate.services.UsersManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelController {

    @Autowired
    HotelManager hotelManager;

    //HOTEL CRUD
    @PostMapping(path = "/hotel/add")
    public void add(@RequestBody Hotels hotel, @RequestParam(name = "userId") long userId) {
        hotelManager.createHotel(hotel, userId);
    }


    @GetMapping(path = "/hotel")
    public ResponseEntity<List<com.tourMate.entities.Hotels>> showHotels() {
        try {
            List<Hotels> hoteli = hotelManager.getHotels();
            return ResponseEntity.ok(hoteli);
        } catch (Exception e) {
            // Handle the exception, log it, and return an error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping(path = "/hotel/user/{id}")
    public ResponseEntity<List<Hotels>> getHotelsForUser (@PathVariable(name = "id") long userId)
    {
        try {

            List<Hotels> hoteli = hotelManager.getHotelsForUser(userId);
            return ResponseEntity.ok(hoteli);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping(path = "/hotel/list/{id}")
    public ResponseEntity<Hotels> getHotelById (@PathVariable(name = "id") long hotelId)
    {
        try {

            return ResponseEntity.ok(hotelManager.findHotelByID(hotelId));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @PostMapping(path = "/hotel/edit")
    public void edit(@RequestBody Hotels hotel)
    {
        hotelManager.editHotel(hotel.getHotelId(), hotel.getHotelName(), hotel.getHotelDescripiton(), hotel.getHotelLocation(), hotel.getHotelEDBS(), hotel.getParking(), hotel.getPetFriendly(), hotel.getInternetAvailable());
    }

    @GetMapping(path = "/hotel/delete")
    public ResponseEntity remove(@RequestParam(name = "hotelId") long hotelId) {
        try
        {
            hotelManager.deleteHotel(hotelId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    // HOTEL IMAGE CRUD
    @GetMapping(path = "/hotel/images")
    public List<HotelsImages> getHotelImages(@RequestBody Hotels hotel)
    {
        return hotelManager.getHotelImages(hotel);
    }

    @GetMapping(path = "/hotel/images/add")
    public void addHotelImages(@RequestParam(name = "hotelId") long hotelId, @RequestParam(name = "url") String url)
    {
        Hotels h = hotelManager.findHotelByID(hotelId);
        hotelManager.addHotelImage(h, url);
    }

    @GetMapping(path = "/hotel/images/delete")
    public ResponseEntity removeHotelImage(@RequestParam(name = "hotelId") long hotelId) {
        try {
            hotelManager.deleteHotelImage(hotelId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/hotel/{id}/room")
    public List<HotelRoom> getHotelRooms(@PathVariable(value = "id") long hotelId)
    {
        System.out.println("ovde so id: " + hotelId);
        return hotelManager.getRoomsOfHotel(hotelId);
    }


    //HOTEL ROOM CRUD
    @PostMapping(path = "/hotel/rooms/add")
    public void addRoom(@RequestBody HotelRoom room, @RequestParam(name = "hotelId") long hotelId) {
        Hotels h = hotelManager.findHotelByID(hotelId);
        hotelManager.createRoom(h, room.getHotelRoomDescription(), room.getHotelRoomName(), room.getKitchenAvailable(), room.getAirConditioning(), room.getBalcony(), room.getPrice());
    }

    @PostMapping(path = "/hotel/rooms/edit")
    public void editRoom(@RequestBody HotelRoom room) {
        hotelManager.editRoom(room.getHotelRoomId(), room.getHotel(), room.getHotelRoomDescription(), room.getHotelRoomName(), room.getKitchenAvailable(), room.getAirConditioning(), room.getBalcony(), room.getPrice());
    }

    @GetMapping(path = "/hotel/rooms/delete")
    public ResponseEntity removeRoom(@RequestParam(name = "hotelRoomId") long hotelRoomId) {
        try
        {
            hotelManager.deleteRoom(hotelRoomId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    //HOTEL RESERVATION CRUD

    @PostMapping(path = "/hotel/rooms/reservation/edit")
    public void editRoomReservation(@RequestBody HotelRoomReservations reservation) {
        hotelManager.editReservation(reservation.getHotelRoomReservedId(), reservation.getUser(), reservation.getHotelRoom(), reservation.getDateFrom(), reservation.getDateTo(), reservation.getNumberOfBeds());
    }

    @GetMapping(path = "/hotel/rooms/reservation/delete")
    public ResponseEntity removeReservation(@RequestParam(name = "hotelRoomReservationId") long hotelRoomReservationId) {
        try
        {
            hotelManager.deleteReservation(hotelRoomReservationId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

        //HOTEL AVAILABILITY CRUD
    @PostMapping(path = "/hotel/rooms/available/{id}/add")
    public void addRoomAvailible(@RequestBody HotelRoomAvailable hotelRoomAvailable, @PathVariable long id)
    {
        HotelRoom hotelRoom = hotelManager.findRoomById(id);
        hotelManager.createRoomAvailible(hotelRoom, hotelRoomAvailable.getDateFrom(), hotelRoomAvailable.getDateTo(), hotelRoomAvailable.getNumberOfBeds());
    }

    @PostMapping(path = "/hotel/rooms/available/edit")
    public void editRoomAvailible(@RequestBody HotelRoomAvailable hotelRoomAvailable)
    {
        hotelManager.editRoomAvailible(hotelRoomAvailable.getHotelRoomAvailableId(), hotelRoomAvailable.getHotelRoom(), hotelRoomAvailable.getDateFrom(), hotelRoomAvailable.getDateTo(), hotelRoomAvailable.getNumberOfBeds());
    }

    @GetMapping(path = "/hotel/rooms/available/remove")
    public ResponseEntity removeRoomAvailible(@RequestParam(name = "hotelRoomAvailibleId") long hotelRoomAvailibleId)
    {
        try
        {
            hotelManager.deleteRoomAvailible(hotelRoomAvailibleId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception ex)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "hotel/rooms/{id}/available")
    public List<HotelRoomAvailable> getRoomAvailability(@PathVariable Long id)
    {
        return hotelManager.getRoomsAvailibility();
    }

    @GetMapping(path = "/hotel/search")
    public List<HotelDto> searchAvailibleRooms(@RequestParam(name = "hotelLocation") String hotelLocation, @RequestParam(name = "dateFrom") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateFrom,
                                               @RequestParam(name = "dateTo") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateTo, @RequestParam(name = "numBeds") int numBeds)
    {
        System.out.println(hotelLocation);
        System.out.println(dateFrom + " " + dateTo);
        return hotelManager.getRoomsAvailibilityByDateAndLocation(hotelLocation, dateFrom, dateTo, numBeds);
    }

    @PostMapping(path = "/hotel/reserve")
    public void reserveHotelRoom(@RequestParam(name = "hotelRoomId")Long hotelRoomId,
                                 @RequestParam(name = "userId") Long userId,
                                 @RequestParam(name = "hotelRoomAvailableId") Long hotelRoomAvailableId,
                                 @RequestParam(name = "numberOfBeds") Integer numberOfBeds,
                                 @RequestParam(name = "from") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date from,
                                 @RequestParam(name = "to") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date to){



        hotelManager.createReservation(userId, hotelRoomId, hotelRoomAvailableId, from, to, numberOfBeds);
    }

}
