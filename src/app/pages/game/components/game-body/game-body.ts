import { Component, Input, Signal, signal, computed, effect, output, EventEmitter, Output, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-body',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './game-body.html',
  styleUrl: './game-body.css'
})
export class GameBody {

  activatedButton = input.required<boolean>();
  answerLength = input.required<number>(); 
  question = input.required<string>();
  hint = input.required<string>();

  // ✅ Emitir eventos al padre
  responseQuestion = output<string>(); // Emitir respuesta al padre
  showHintEvent = output<void>(); // Emitir evento de mostrar pista


  text = signal('');
  isFocused = signal(false);

  // ✅ Form control y grupo
  response = new FormControl('', { nonNullable: true });
  responseForm = new FormGroup({
    response: this.response
  });

  constructor() {
    // Reaccionar a cambios de answerLength para actualizar validator
    effect(() => {
      const maxLen = this.answerLength();
      this.response.setValidators([
        Validators.required,
        Validators.maxLength(maxLen),
        Validators.minLength(maxLen),
        Validators.pattern('^[A-Z]+$')
      ]);
      this.response.updateValueAndValidity({ emitEvent: false });
    });

        // 🔹 Sincronizar estado habilitado/deshabilitado del input con activatedButton
    effect(() => {
      if (this.activatedButton()) {
        this.response.disable({ emitEvent: false });
      } else {
        this.response.enable({ emitEvent: false });
      }
    });
  }

  letras = computed(() => {
    const entrada = this.text();
    const max = this.answerLength();
    const letras = entrada.split('');
    while (letras.length < max) letras.push('');
    return letras.slice(0, max);
  });

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value.toUpperCase();
    this.text.set(value);
    this.response.setValue(value);
  }

  onSubmit() {
    const value = this.response.value;
    console.log('Respuesta enviada:', value);
    this.responseQuestion.emit(value ?? '');
    this.text.set('');
    this.response.reset();
    this.isFocused.set(false);
    this.responseForm.reset();

  }

  onFocus() {
    this.isFocused.set(true);
  }
  onBlur() {
    this.isFocused.set(false);
  }

  onHintClick() {
    this.showHintEvent.emit();
  }

  showHint() {
    
  }
}
