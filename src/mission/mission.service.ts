import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { IMission } from './mission.interface';
import * as fs from 'fs'; 
import * as path from 'path';


@Injectable()

export class MissionService {
  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' }
  ];
  getSummary(){

  }
  
  findAll(): IMission[] {
    const fileData = FileSystem.readFile(
      path.join(ProcessingInstruction.cwd(), 'data','missions.json'),
      'utf-8',
    );
    return JSON.parse(fileData) as IMission
    
  }

}
