import { UploadService } from './../upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;

  constructor(private service: UploadService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    const selectedFiles = <FileList> event.srcElement.files;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    /*
    // convertendo selectedFiles para poder iterar com for of
    Array.from(selectedFiles).forEach(file => {
      fileNames.push(file.name);
      this.files.add(fileNames[0]); // se necessário voltaremos para o for clássico
    });
    */
    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, '/api/uploads')
      .subscribe(response => {
        console.log('Upload concluído.');
        this.files.clear();
      });
    }
  }
}
