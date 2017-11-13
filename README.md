# dhkim0821.github.io


# .spacemacs user-config
  (add-hook 'doc-view-mode-hook 'auto-revert-mode)
  (require 'linum)
  (global-linum-mode 1)
  (global-set-key "\M-n" 'projectile-find-other-file)
  (global-set-key "\C-l" 'goto-line)
  (global-set-key [\C-up] 'scroll-down-line)
  (global-set-key [\C-down] 'scroll-up-line)

  (cua-mode t)
  (setq cua-auto-tabify-rectangles nil) ;; Don't tabify after rectangle commands
  (transient-mark-mode 1) ;; No region when it is not highlighted
  (setq cua-keep-region-after-copy t) ;; Standard Windows behaviour

