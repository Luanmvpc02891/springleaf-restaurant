package com.springleaf_restaurant_backend.user.restcontrollers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springleaf_restaurant_backend.user.entities.TableStatus;
import com.springleaf_restaurant_backend.user.repositories.TableStatusRepository;

@RestController
@RequestMapping("/api")
public class TableStatusRestController {
    @Autowired
    private TableStatusRepository tableStatusRepository;

    @GetMapping("/tableStatuses")
    public List<TableStatus> getTableStatuss() {
        return tableStatusRepository.findAll();
    }

    @GetMapping("/tableStatus/{tableStatusId}")
    public Optional<TableStatus> getTableStatusById(@PathVariable("tableStatusId") Long tableStatusId) {
        return tableStatusRepository.findById(tableStatusId);
    }
}
