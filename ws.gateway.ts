import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { WSService } from "./services/ws.service";
import { Inject } from "@nestjs/common";

@WebSocketGateway({
  transports: ["websocket"],
  cors: {
    origin: "*",
  },
})
export class WSGateway {
  @WebSocketServer() server: Server;
  @Inject() private wsService: WSService;

  handleConnection(socket: Socket) {}

  @SubscribeMessage("ping")
  createRoom(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    client.join("global-room");
    this.server.emit('pong', { joinRoom: true});
  }
}
