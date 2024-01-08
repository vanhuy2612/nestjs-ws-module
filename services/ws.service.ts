import { Inject, Injectable } from "@nestjs/common";
import { WSGateway } from "../ws.gateway";
import { Socket } from "socket.io";

@Injectable()
export class WSService {
    constructor() {}
    handleConnection(socket: Socket) {

    }

    registerEvent(eventName: string, callback: Function) {
        
    }
}