import { render, screen, act, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';
import '@testing-library/jest-dom'

const mock = new MockAdapter(axios);
const backendURL = 'http://localhost:3000';
const mockedDuty = {"id":10,"title":"New duty title"};

describe('App', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('should fetch duties from API', async () => {
    mock.onGet(`${backendURL}/api/duties`).reply(200, [mockedDuty]);

    await act(async () => {
      render(<App />);
    });

    const dutyElement = screen.getByText(mockedDuty.title);
    expect(dutyElement).toBeInTheDocument();
  });

  test('should create a duty', async () => {
    mock.onGet(`${backendURL}/api/duties`).reply(200, [mockedDuty]);
    mock.onPost(`${backendURL}/api/duties`).reply(201);

    await act(async () => {
      render(<App />);
    });

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const buttonElement = screen.getByText('Add Duty');

    await act(async () => {
      inputElement.value = mockedDuty.title;
      buttonElement.click();
    });

     // Wait for the component to update/render with the new duty
    await waitFor(() => {
      expect(screen.getByText(mockedDuty.title)).toBeInTheDocument();
    });
  });

  test('should delete a duty', async () => {
    let getMockCounter = 0;
  
    mock.onGet(`${backendURL}/api/duties`).reply(() => {
      if (getMockCounter === 0) {
        getMockCounter++;
        return [200, [mockedDuty]];
      } else {
        return [200, []];
      }
    });
  
    mock.onDelete(`${backendURL}/api/duties/${mockedDuty.id}`).reply(204);
  
    await act(async () => {
      render(<App />);
    });
  
    const buttonElement = screen.getByText('Delete');
  
    await act(async () => {
      buttonElement.click();
    });
  
    // Wait for the component to update/render after the deletion
    await waitFor(() => {
      expect(screen.queryByText(mockedDuty.title)).not.toBeInTheDocument();
    });
  });
  

});
