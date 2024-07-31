import { NextResponse, NextRequest } from 'next/server';
import jokes from './jokes.json';

export function GET(request: NextRequest) {
  return NextResponse.json(jokes);
}