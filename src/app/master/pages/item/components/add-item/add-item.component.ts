import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { ItemService } from 'src/app/providers/item/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,private commonService: CommonService, private itemService: ItemService) { }
  apiLoader = false;
  previewImageUrl :any |undefined;
  selectedFile :any;
  itemForm = this.fb.group({
    itemTypeId:['4',[Validators.required]],
    categoryId:['4',[Validators.required]],
    itemCode:['',[Validators.required]],
    colorId:['4',[Validators.required]],
    strand:['',[Validators.required]],
    length:['',[Validators.required]],
    noOfTwist:['',[Validators.required]],
    twineType:['',[Validators.required]],
    treasureYarn:['',[Validators.required]],
    treasureYarnColorId:['',[Validators.required]],
    itemName:['',[Validators.required]],
    itemUnit:['',[Validators.required]],
    reorderQty:['',[Validators.required]],
    locationCode:['',[Validators.required]],
    currentStock:['',[Validators.required]],
    noOfLeadDays:['',[Validators.required]],
    kpcCode:['',[Validators.required]],
    description:['',[Validators.required]],
  })
  ngOnInit() {
    this.patchItem();
  }

  save(isEdit: boolean) {
    this.itemForm.markAllAsTouched();
    if (this.itemForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateItem(this.itemForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createItem(this.itemForm.getRawValue());
    }
  }

  patchItem() {
    if (this.dialogData) {
      this.itemForm.patchValue(this.dialogData);
    }
  }

  createItem(payload: any) {
    let finalPayload:any = payload;
    finalPayload.itemImage = this.previewImageUrl ? this.previewImageUrl : '';
    this.apiLoader = true;
    this.itemService.createItem(finalPayload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Item created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateItem(payload: any, id: string) {
    let finalPayload:any = payload;
    finalPayload.itemImage = this.previewImageUrl ? this.previewImageUrl : '';
    this.apiLoader = true;
    this.itemService.updateItem(finalPayload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Item updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  public GetFileOnLoad(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.previewFile();
    }
  }

  previewFile(): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // Display the preview using e.target.result
      this.previewImageUrl = e?.target?.result;
      // this.itemForm.get('image')?.patchValue(this.previewImageUrl as string | null);
    };
    reader.readAsDataURL(this.selectedFile);
  }



  isImage(): boolean {
    
    return this.dialogData ? true : this.selectedFile?.type?.startsWith('image/');
    
  }

  onDrop(event: any): void {
    console.log(event.dataTransfer.files);
    event.preventDefault();
    this.handleFiles(event.dataTransfer.files);
  }

  onDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.add('dragover');
  }

  onDragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('dragover');
  }

  handleFiles(files: FileList): void {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (validImageTypes.includes(file.type)) {
        this.previewImage(file);
      } else {
        
        console.error('Invalid file type. Please select an image (JPEG, PNG, GIF).');
      }
    }
    
  }

  previewImage(file: File): void {
    this.selectedFile = file;
    const reader = new FileReader();

    reader.onload = (e: any) => {
       const imageUrl = e.target.result;
      this.previewImageUrl = e.target.result;
      // this.itemForm.get('image')?.setValue(this.previewImageUrl);
    };

    reader.readAsDataURL(file);
  }

  hideImage(){
   this.selectedFile = null;
   this.previewImageUrl = '';
  //  this.itemForm.get('image')?.setValue('');
  }
}
