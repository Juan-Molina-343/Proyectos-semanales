// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: App.tsx
// ============================================

import { useState } from 'react';
import { ConfigProvider } from './contexts/ConfigContext';
import { Layout } from './components/Layout/Layout';
import { SettingsPanel } from './components/SettingsPanel/SettingsPanel';
import { Card } from './components/Card/Card';
import { Modal } from './components/Modal/Modal';
import { Tabs } from './components/Tabs/Tabs';
import './styles/App.css';

// ============================================
// DATOS DE EJEMPLO - Dominio Gimnasio
// ============================================

const sampleClasses = [
  { id: '1', nombre: 'Cardio Intensivo', instructor: 'Laura Pérez', horario: 'Lunes 7:00 AM' },
  { id: '2', nombre: 'Yoga Avanzado', instructor: 'Carlos Gómez', horario: 'Martes 6:00 PM' },
  { id: '3', nombre: 'CrossFit', instructor: 'Ana Torres', horario: 'Miércoles 5:30 PM' },
];

// ============================================
// CONTENIDO PRINCIPAL
// ============================================

const MainContent = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div>
      <h2>🏋️ Gimnasio - Clases Disponibles</h2>
      <p>
        Esta aplicación demuestra el uso de Context API y Compound Components
        para crear una interfaz configurable.
      </p>

      {/* Cards con datos del dominio */}
      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', alignItems: 'start' }}>
        {sampleClasses.map((clase) => (
          <Card key={clase.id} variant="elevated">
            <Card.Header>
              <Card.Title>{clase.nombre}</Card.Title>
            </Card.Header>
            <Card.Body>
              <p><strong>Instructor:</strong> {clase.instructor}</p>
              <p><strong>Horario:</strong> {clase.horario}</p>
            </Card.Body>
            <Card.Footer>
              <Card.Actions>
                <Modal>
                  <Modal.Trigger asChild>
                    <button>Ver detalles</button>
                  </Modal.Trigger>
                  <Modal.Content title={clase.nombre}>
                    <Modal.Close />
                    <Tabs defaultValue="info">
                      <Tabs.List>
                        <Tabs.Tab value="info">ℹ️ Información</Tabs.Tab>
                        <Tabs.Tab value="schedule">📅 Horarios</Tabs.Tab>
                        <Tabs.Tab value="reviews">⭐ Reseñas</Tabs.Tab>
                      </Tabs.List>

                      <Tabs.Panel value="info">
                        <p><strong>Instructor:</strong> {clase.instructor}</p>
                        <p><strong>Nivel:</strong> Intermedio-Avanzado</p>
                        <p><strong>Capacidad:</strong> 20 personas</p>
                        <p><strong>Descripción:</strong> Clase de entrenamiento intenso con técnicas avanzadas para mejorar tu rendimiento físico.</p>
                      </Tabs.Panel>

                      <Tabs.Panel value="schedule">
                        <p><strong>Horario:</strong> {clase.horario}</p>
                        <p><strong>Duración:</strong> 60 minutos</p>
                        <p><strong>Frecuencia:</strong> 2 veces por semana</p>
                        <p><strong>Próxima sesión:</strong> Esta semana</p>
                      </Tabs.Panel>

                      <Tabs.Panel value="reviews">
                        <p><strong>Calificación promedio:</strong> 4.8/5.0</p>
                        <p><strong>Total de reseñas:</strong> 47</p>
                        <p>"¡Excelente clase! El instructor es muy motivador." - María G.</p>
                        <p>"Me encantó, muy recomendado." - Carlos M.</p>
                      </Tabs.Panel>
                    </Tabs>
                  </Modal.Content>
                </Modal>
              </Card.Actions>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ============================================
// APLICACIÓN PRINCIPAL
// ============================================

export const App = () => {
  return (
    <ConfigProvider>
      <Layout sidebar={<SettingsPanel />}>
        <MainContent />
      </Layout>
    </ConfigProvider>
  );
};
