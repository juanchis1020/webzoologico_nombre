import { Component } from '@angular/core';
import { ChatPrivadoService } from '../../services/chatprivado-service';

@Component({
  selector: 'app-chatprivado',
  templateUrl: './chatprivado-component.html',
  styleUrls: ['./chatprivado-component.css']
})
export class ChatPrivadoComponent {

  chats: any[] = [];
  mensaje = "";
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
    if (!this.mensaje) return;

    this.chatService.agregarMensaje(this.chatSeleccionado._id, {
      emisor: "UsuarioX",
      texto: this.mensaje
    }).subscribe(() => {
      this.mensaje = "";
      this.cargarChats();
    });
  }
} 