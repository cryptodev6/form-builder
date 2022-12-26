import { ModalComponent } from './../../../_metronic/partials/layout/modals/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from "rxjs";
import { defaultBookingComponents } from './../../../models/data/default-coponents';
import { FormBuilderService } from './../../../_metronic/layout/core/form-builder.service';
import { ModalConfig } from "src/app/_metronic/partials";
const bookingForm = 'clientl_booking_form';
@Component({
  selector: 'app-booking-form-builder',
  templateUrl: './booking-form-builder.component.html',
  styleUrls: ['./booking-form-builder.component.scss']
})
export class BookingFormBuilderComponent implements OnDestroy, OnInit {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  @ViewChild('json') jsonElement?: ElementRef | any;
  @ViewChild('formio') formio: any;
  @ViewChild('modal') private modalComponent: ModalComponent;

  public form: any = {
    components: [],
  }

  public options: any = {
    builder: {
      search: false,
      basic: {
        title: 'Additional Components',
        weight: 20
      },
      advanced: false,
      data: false,
      premium: false
    },
  };

  public modalConfig: ModalConfig = {
    modalTitle: '',
    dismissButtonLabel: 'I am Finished',
    closeButtonLabel: 'Continue Editing'
  };

  constructor(private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
    private fbService: FormBuilderService) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }


  ngOnInit(): void {

    this.setInitialComponents();

    this.fbService.saveForm.subscribe(() => {
      this.saveForm()
    })
  }


  async showSaveSuccessModal() {
    return await this.modalComponent.open();
  }

  setInitialComponents() {
    const savedForm = localStorage.getItem(bookingForm)
    console.log('defaultBookingComponents', defaultBookingComponents);
    
    console.log('dfdf', savedForm);
    if (savedForm !== null) {
      let form = JSON.parse(savedForm);
      this.form.components = form.components.length ? form.components : defaultBookingComponents[0].components;
      console.log(form.components)
    } else {
      this.form.components = defaultBookingComponents[0].components;
    }
  }

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  saveForm() {
    console.log('df', this.formio.form);
    
    localStorage.setItem(bookingForm, JSON.stringify(this.formio.form, null, 4))
    this.showSaveSuccessModal();
  }
}
