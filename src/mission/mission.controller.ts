import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

 

  @Get('missions')
  findAll() {
    return this.missionService.findAll();
  }

}
