import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    // Procura um appointment que já esteja cadastrado com a mesma data.
    // Se existir uma data, a função find vai retornar o appointmet já cadastrado.
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    //se encontrar retorno o appointment, se não retorna o null
    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({provider, date});
    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
