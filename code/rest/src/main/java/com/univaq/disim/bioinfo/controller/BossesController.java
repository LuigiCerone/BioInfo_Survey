package com.univaq.disim.bioinfo.controller;

import com.univaq.disim.bioinfo.model.Bosses;
import com.univaq.disim.bioinfo.repository.BossesRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("bosses")
public class BossesController {
    @Autowired
    private BossesRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List getAllBosses() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Bosses getBossById(@PathVariable("id") ObjectId id) {
        return repository.findBy_id(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Bosses createBoss(@Valid @RequestBody Bosses bosses) {
        bosses.set_id(ObjectId.get());
        repository.save(bosses);
        return bosses;
    }
}