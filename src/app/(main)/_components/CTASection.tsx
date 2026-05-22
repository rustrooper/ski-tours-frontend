'use client';

import { useState } from 'react';

import { Icon } from '@/components/brand/Icon';
import { Photo } from '@/components/brand/Photo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatPhone, isValidPhone } from '@/lib/phone';

export function CTASection() {
  const [phone, setPhone] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isValid = isValidPhone(phone);
  const showError = !isValid && (submitAttempted || (touched && phone !== ''));
  const errorId = 'cta-phone-error';

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isValid) {
      setSubmitAttempted(true);
      return;
    }
    setPhone('');
    setTouched(false);
    setSubmitAttempted(false);
  };

  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="relative min-h-155 py-24 md:h-155 md:py-0">
        <Photo src="/img/dombay.png" alt="" style={{ position: 'absolute', inset: 0 }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, oklch(0.13 0.012 240 / 0.65) 0%, oklch(0 0 0 / 0.5) 50%, oklch(0.13 0.012 240 / 0.9) 100%)',
          }}
        />
        <div className="relative z-2 flex h-full flex-col items-center justify-center px-5 text-center md:px-16">
          <div className="st-eyebrow mb-6 md:mb-7">04 / подбор</div>
          <h2 className="st-h2 m-0 max-w-225">Подобрать тур.</h2>
          <p className="st-lede mt-6 max-w-135">
            Оставьте номер телефона — менеджер расскажет подробнее о предстоящем путешествии.
          </p>

          <form
            className="mt-9 flex w-full max-w-140 flex-col gap-3 md:flex-row md:gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              variant="pill"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+7 ___ ___ __ __"
              aria-label="Телефон"
              className="flex-1"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              onBlur={() => setTouched(true)}
              aria-invalid={showError || undefined}
              aria-describedby={showError ? errorId : undefined}
            />
            <Button type="submit" variant="ice" size="pill-lg" className="px-8">
              Подобрать
              <Icon.arrowRight />
            </Button>
          </form>

          {showError && (
            <p
              id={errorId}
              role="alert"
              className="text-destructive mt-3 max-w-140 self-start text-left text-[13px] md:self-auto"
            >
              Введите телефон полностью в формате +7 (xxx) xxx-xx-xx.
            </p>
          )}

          <div className="text-fg-2 mt-5 flex items-start justify-center gap-2">
            <span className="mt-0.5">
              <Icon.shield />
            </span>
            <span className="text-fg-2 max-w-105 text-left text-[13px]">
              Нажимая «Подобрать», вы соглашаетесь с{' '}
              <a
                href="#"
                className="text-fg-1 underline"
                style={{ textDecorationColor: 'var(--color-hairline-strong)' }}
              >
                политикой обработки персональных данных
              </a>
              .
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <span className="text-fg-2 text-[13px]">или напишите в мессенджер:</span>
            <Button asChild variant="ghost-pill" size="icon-pill-sm" aria-label="Telegram">
              <a href="#">
                <Icon.tg />
              </a>
            </Button>
            <Button asChild variant="ghost-pill" size="icon-pill-sm" aria-label="WhatsApp">
              <a href="#">
                <Icon.wa />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
