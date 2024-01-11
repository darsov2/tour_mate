package com.tourMate.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin("*")
@RestController
@RequestMapping("/images")
class ImageController {

    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFile(@RequestParam MultipartFile file, @RequestParam String type) {

        try
        {
            Path desktopPath = Paths.get(System.getProperty("user.home"), "Desktop\\images_tm");
            Path filePath = desktopPath.resolve(file.getOriginalFilename());
            System.out.println(filePath);
            file.transferTo(filePath.toFile());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        logger.info(String.format("File name '%s' uploaded successfully.", file.getOriginalFilename()));
        return ResponseEntity.ok().build();
    }

    @GetMapping("/download")
    public ResponseEntity downloadFile1(@RequestParam String fileName) throws IOException {

        File file = new File(fileName);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(file.length())
                .body(resource);
    }
}