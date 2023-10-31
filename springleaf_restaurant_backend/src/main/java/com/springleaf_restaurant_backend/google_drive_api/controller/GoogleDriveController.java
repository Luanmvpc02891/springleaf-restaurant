package com.springleaf_restaurant_backend.google_drive_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.springleaf_restaurant_backend.google_drive_api.model.GoogleDriveFileDTO;
import com.springleaf_restaurant_backend.google_drive_api.model.GoogleDriveFoldersDTO;
import com.springleaf_restaurant_backend.google_drive_api.service.impl.GoogleDriveFileService;
import com.springleaf_restaurant_backend.google_drive_api.service.impl.GoogleDriveFolderService;
import com.springleaf_restaurant_backend.google_drive_api.service.impl.GoogleFileManager;

import com.google.api.services.drive.model.File;

import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

@RestController(value = "googleDriveController")
public class GoogleDriveController {

    @Autowired
    GoogleDriveFileService googleDriveFileService;

    @Autowired
    GoogleDriveFolderService googleDriveFolderService;

    @Autowired
    GoogleFileManager googleFileManager;

    // Get all file on drive
    @GetMapping("/api/")
    public ModelAndView pageIndex() throws IOException, GeneralSecurityException {
        ModelAndView mav = new ModelAndView("index");

        List<GoogleDriveFileDTO> listFile = googleDriveFileService.getAllFile();
        List<GoogleDriveFoldersDTO> listFolder = googleDriveFolderService.getAllFolder();
        for (GoogleDriveFoldersDTO googleDriveFoldersDTO : listFolder) {
            System.out.println(googleDriveFoldersDTO);
        }
        mav.addObject("DTO_FOLDER", listFolder);
        mav.addObject("DTO_FILE", listFile);
        return mav;
    }


    // Upload file to public
    @PostMapping(value = "/api/upload/file",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE} )
    public ModelAndView  uploadFile(@RequestParam("fileUpload") MultipartFile fileUpload,
                                @RequestParam("filePath") String pathFile,
                                @RequestParam("shared") String shared) {

        System.out.println(pathFile);
        if (pathFile.equals("")){
            pathFile = "Root"; // Save to default folder if the user does not select a folder to save - you can change it
        }
        System.out.println(pathFile);
        googleDriveFileService.uploadFile(fileUpload, pathFile, Boolean.parseBoolean(shared));
        return new ModelAndView("redirect:" + "/");
    }

    // Delete file by id
    @GetMapping("/api/delete/file/{id}")
    public ModelAndView deleteFile(@PathVariable String id) throws Exception {
        googleDriveFileService.deleteFile(id);
        return new ModelAndView("redirect:" + "/");
    }

    // Download file
    @GetMapping("/api/download/file/{id}")
    public void downloadFile(@PathVariable String id, HttpServletResponse response) throws IOException, GeneralSecurityException {
        googleDriveFileService.downloadFile(id, response.getOutputStream());
    }

    // Get all root folder on drive
    @GetMapping("/api/list/folders") // or {"/list/folders","/list/folders/{parentId}"}
    public ModelAndView listFolder() throws IOException, GeneralSecurityException {
        ModelAndView mav = new ModelAndView("list_folder");
        List<GoogleDriveFoldersDTO> listFolder = googleDriveFolderService.getAllFolder();
        mav.addObject("DTO", listFolder);
        return mav;
    }

    // Create folder
    @PostMapping("/api/create/folder")
    public ModelAndView createFolder(@RequestParam("folderName") String folderName) throws Exception {
        googleDriveFolderService.createFolder(folderName);
        return new ModelAndView("redirect:" + "/list/folders");
    }

    // Delete folder by id
    @GetMapping("/api/delete/folder/{id}")
    public ModelAndView deleteFolder(@PathVariable String id) throws Exception {
        googleDriveFolderService.deleteFolder(id);
        return new ModelAndView("redirect:" + "/list/folders");
    }
}