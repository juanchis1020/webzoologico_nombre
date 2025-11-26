import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // Necesario para *ngIf y *ngFor
import { FormsModule } from '@angular/forms';     // Necesario para [(ngModel)]
import { ChatPrivadoService } from '../../services/chatprivado-service';

@Component({
  selector: 'app-chatprivado',
  standalone: true,
  imports: [CommonModule, FormsModule],  // <-- IMPORTANTE
  templateUrl: './chatprivado-component.html',
  styleUrls: ['./chatprivado-component.css']
})
export class ChatPrivadoComponent {

  chats: any[] = [];
  mensaje: string = "";
  chatSeleccionado: any = null;

  constructor(private chatService: ChatPrivadoService) {}

  ngOnInit(): void {
    this.cargarChats();
  }

  cargarChats() {
    this.chatService.obtenerChats().subscribe(data => {
      this.chats = data;
    });
  }

  seleccionarChat(chat: any) {
    this.chatSeleccionado = chat;
  }

  enviarMensaje() {
    if (!this.mensaje.trim()) return;

    this.chatService.agregarMensaje(this.chatSeleccionado._id, {
      emisor: "UsuarioX",
      texto: this.mensaje
    }).subscribe(() => {
      this.mensaje = "";
      this.cargarChats();
    });
  }
} 